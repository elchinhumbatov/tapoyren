import React from "react";
import { useParams } from "react-router";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useState } from "react";
import { useEffect } from "react";

function Package() {
  let { id: packageId } = useParams();
  let [data, setData] = useState({});
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    (() => {
      setLoading(true);
      fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => setTimeout(() => {
        setData({
          name: json.title, age: json.body
        })
        setLoading(false);
      }, 2000));
    })();
  }, []);

  return (
    <div>
      <PageTitle  />
      <section>
        <div className="container">
          {loading ? (
            "loading..."
          ) : (
            <>
              <h1>{data.name}</h1>
              <h2>{data.age}</h2>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Package;
