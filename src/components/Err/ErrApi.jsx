import { useEffect, useState } from "react";
import api from "../../api/api.json";

export default function ErrApi() {

  const [apiError, setError] = useState();
  const apiUrl = `${api.request}://${api.server}/online.json`

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setError(data))

  });

  console.log(apiError);

  return (
    <>
      {/* {apiError ? (
        <div className="bottom w100 index flex center medel padding err left">
          Error fetching API data!<br />
          Page reload and try again! <br />
          This is a MySQL API Problem <br />
          API KEY: {api.apikey} <br />
          API Server: {api.server} <br />
          Need Help? Call Developer Support: +88 0963 857 3063
        </div>
      )
        :
        ""
      } */}



    </>
  );
}
