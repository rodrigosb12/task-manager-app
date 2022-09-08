import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import Link from "next/link";

const ActiveResource = () => {
  const [resource, setResource] = useState({});
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    async function fetchResource() {
      const res = await axios.get("/api/activeresource");
      const resource = res.data;

      const timeToFinish = parseInt(resource.timeToFinish, 10);
      const elapsedTime = moment().diff(moment(resource.activationTime), "seconds");
      const updatedTimeToFinish = timeToFinish * 60 - elapsedTime;

      if (updatedTimeToFinish >= 0) {
        resource.timeToFinish = updatedTimeToFinish;
        setSeconds(updatedTimeToFinish);
      }

      setResource(resource);
    }

    fetchResource();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds < 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [seconds]);

  const completResource = () => {
    axios
      .patch("/api/resources", { ...resource, status: "complete" })
      .then(() => location.reload())
      .catch(() => alert("Cannot complete the resource"));
  };

  const hasResource = resource && resource.id;

  return (
    <div className='active-resource'>
      <h1 className='resource-name'>{hasResource ? resource.title : "No Resource Active"}</h1>
      <div className='time-wrapper'>
        {hasResource &&
          (seconds > 0 ? (
            <h2 className='elapsed-time'>{seconds} Seconds</h2>
          ) : (
            <h2 className='elapsed-time'>
              <button className='button is-success' onClick={completResource}>
                Click and Done!
              </button>
            </h2>
          ))}
      </div>
      {hasResource ? (
        <Link href={`/resources/${resource.id}`}>
          <a className='button'>Go to resource</a>
        </Link>
      ) : (
        <Link href='/'>
          <a className='button'>Go to resources</a>
        </Link>
      )}
    </div>
  );
};

export default ActiveResource;
