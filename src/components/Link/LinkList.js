import React from "react";
import useAuth from "../Auth/useAuth";
import { FirebaseContext } from "../../firebase";

function LinkList(props) {
  const { firebase } = React.useContext(FirebaseContext);
  React.useEffect(() => {
    getLinks();
  }, []);
  function getLinks() {
    firebase.db.collection("links").onSnapshot(handleSnapshot);
  }
  function handleSnapshot(snapshot) {
    const links = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });
  }
  return <div>LinkList</div>;
}

export default LinkList;
