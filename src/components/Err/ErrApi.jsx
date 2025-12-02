import { useEffect, useState } from "react";
import api from "../../api/api.json";


export default function ErrApi() {
    

  const [offline, setOffline] = useState(false);

  const apiurl = `${api.request}://${api.server}`;

  useEffect(() => {
    fetch(apiurl)
      .then(res => {
        if (!res.ok) throw new Error("API Down");
        setOffline(false);
      })
      .catch(err => {
        setOffline(true);
      });
  }, []);  


  return (
    <>
      {offline && (
        <div className="bottom w100 index flex center medel padding err left">
          Error fetching api data, Page reload and try again!
          This is a MySQL API Problem<br />
          API KEY: {api.apikey} <br />
          API Server: {api.server} <br />
          Need Help the call Developer Support: +88 0963 857 3063 
        </div>
      )}
    </>
  );
}
