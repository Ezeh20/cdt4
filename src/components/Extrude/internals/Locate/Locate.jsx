import styles from "./Locate.module.scss";
import Button from "../../../Button";
import axios from "axios";
import { useContext, useState } from "react";
import Modal from "../../../Modal";
import { ModalContext } from "../../../../context/ModalContext";

export const Locate = () => {
  const { setIsActive } = useContext(ModalContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    if ("geolocation" in navigator) {
      // Request permission and get user's location
      navigator.geolocation.getCurrentPosition(
        function (position) {
          // Success callback
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // pass the lat and long as params to the searchPostalCode func
          searchPostalCode(latitude, longitude);
        },
        function (error) {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              alert(`User denied the request for geolocation and is blocked. To reset the permission go to the permission settings > location and unblock the site
                            or just use another browser`);
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              alert("An unknown error occurred.");
              break;
          }
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const searchPostalCode = async (latitude, longitude) => {
    const base = "https://nominatim.openstreetmap.org/reverse";
    const params = new URLSearchParams({
      lat: latitude,
      lon: longitude,
      format: "json",
      addressdetails: 1,
    });

    const getPostCode = `${base}?${params}`;

    try {
      setIsActive((pre) => !pre);
      setLoading(true);
      const { data } = await axios.get(getPostCode);
      setData((pre) => [...pre, data]);
      setLoading(false);
    } catch (error) {
      //
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className={styles.locate}>
      <Button label="Locate Me" onClick={getLocation} className={styles.btn} />
      <Modal>
        {loading ? (
          "Loading..."
        ) : (
          <div className={styles.Modal}>
            {data.length > 0 && (
              <div className={styles.entry}>
                {data.map((itm, idx) => {
                  const { address } = itm;
                  return (
                    <div key={idx} className={styles.res}>
                      <div className={styles.top}>
                        <p>{address.postcode}</p>
                        <p>{address.country}</p>
                      </div>
                      <div className={styles.bottom}>
                        <p>{address.state}</p>
                        <p>{address.city}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};
