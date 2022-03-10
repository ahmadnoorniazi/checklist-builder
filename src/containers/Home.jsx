import React, { useState, useEffect } from "react";
import ChecklistModal from "../components/ChecklistModal";
import { getDatabase, ref, set, get, child } from "firebase/database";

function Home() {
  const [checklist, setChecklist] = useState([]);
  const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (Array.isArray(checklist) && checklist.length) {
      const statusCount = checklist.filter(({ status }) => status).length;
      const total = (statusCount * 100) / checklist.length;
      setCompletionPercentage(total.toFixed());
    }
  }, [checklist]);

  const onUpdateData = async (key, data) => {
    const db = getDatabase();
    const checkListRef = ref(db, "checklist/" + key);
    await set(checkListRef, {
      ...data,
    });
    await fetchData();
  };

  const fetchData = async () => {
    try {
      const dbRef = ref(getDatabase());
      const snapshot = await get(child(dbRef, `checklist`));
      if (snapshot.exists()) {
        let dataObject = snapshot.val();
        let result = Object.keys(dataObject).map((key) => ({
          key,
          ...dataObject[key],
        }));
        setChecklist(result);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="home-main">
      <h1>Welcome to Checklist Builder</h1>
      <ChecklistModal
        checklist={checklist}
        onUpdateData={onUpdateData}
        completionPercentage={completionPercentage}
      />
    </div>
  );
}

export default Home;
