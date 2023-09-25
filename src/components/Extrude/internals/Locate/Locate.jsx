import styles from "./Locate.module.scss";
import Button from "../../../Button";
import axios from "axios";
import { useContext, useState } from "react";
import Modal from "../../../Modal";
import { ModalContext } from "../../../../context/ModalContext";
import { constants } from "./constants";

const { unavailable, unknown, denied, timeout, not } = constants;
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
              alert(denied);
              break;
            case error.POSITION_UNAVAILABLE:
              alert(unavailable);
              break;
            case error.TIMEOUT:
              alert(timeout);
              break;
            case error.UNKNOWN_ERROR:
              alert(unknown);
              break;
          }
        }
      );
    } else {
      alert(not);
    }
  };

  //use the user's latitude and longitude to fetch the location data
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
          <p style={{ color: "#fff" }}>Loading...</p>
        ) : (
          <div className={styles.modal}>
            {data.length > 0 && (
              <div className={styles.entry}>
                {data.map((itm, idx) => {
                  const { address } = itm;
                  return (
                    <div key={idx} className={styles.res}>
                      <p className={styles.result}>
                        <span className={styles.span}>Postcode:</span>
                        {address.postcode}
                      </p>
                      <p className={styles.result}>
                        <span className={styles.span}>Country:</span>
                        {address.country}
                      </p>

                      <p className={styles.result}>
                        <span className={styles.span}>State:</span>
                        {address.state}
                      </p>
                      <p className={styles.result}>
                        <span className={styles.span}>City:</span>
                        {address.city}
                      </p>
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
