import React, { useEffect, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/appSlice";

const Messages = () => {
  const { emails, searchText } = useSelector((store) => store.appSlice);
  const [tempEmail, setTempEmail] = useState(emails);
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    // const unsubScribe = onSnapshot(collection(db, "emails"), (snapshot) => {

    const unsubScribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // console.log(allEmails);
      dispatch(setEmails(allEmails));
    });
    // CleanUp //
    return () => unsubScribe();
  }, []);

  useEffect(() => {
    const filteredEmail = emails?.filter((email) => {
      return (
        email?.subject?.toLowerCase().includes(searchText.toLowerCase()) ||
        email?.to?.toLowerCase().includes(searchText.toLowerCase()) ||
        email?.message?.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setTempEmail(filteredEmail);
  }, [searchText, emails]);

  return (
    <div>{
      // emails && emails?.map((email) => <Message email={email} />)
      tempEmail && tempEmail?.map((email) => <Message email={email} />)

      }
      
      </div>
  );
};

export default Messages;
