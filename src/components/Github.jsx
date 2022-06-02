import React, { useEffect, useState } from "react";
import style from "./../styles/github.module.css";
import Header from "./Header";
import axios from "axios";

function Github() {
  const [users, setUsers] = useState();
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=${page}`
      )
      .then((res) => {
        const feed = res.data.items;
        setUsers(feed);
      });
  }, [page]);
  function getDifferenceInDays(date1, date2) {
    const diff = Math.abs(date2 - date1);
    return diff / (1000 * 60 * 60 * 24);
  }
  return (
    <div>
      <Header />
      <main className={style.main}>
        {users &&
          users.map((user) => {
            return (
              <div className={style.user}>
                <img src={user.owner.avatar_url} alt="" />
                <div>
                  <h3>{user.full_name}</h3>
                  <p>{user.description}</p>
                  <nav>
                    <span>
                      Stars: <strong>{user.stargazers_count}</strong>
                    </span>
                    <span>
                      Issues: <strong>{user.open_issues}</strong>
                    </span>
                  </nav>
                  <i>
                    Submitted{" "}
                    {Math.trunc(
                      getDifferenceInDays(new Date(user.created_at), new Date())
                    )}{" "}
                    days ago by {user.name}
                  </i>
                </div>
              </div>
            );
          })}
      </main>
      {/* Implemented Just 5 pages for brevity */}
      <div className={style.navigator}>
        <button
          className={style.navigate}
          onClick={() => {
            if (page !== 1) {
              setPage(page - 1);
            }
          }}
        >
          {"<"} Previous
        </button>
        <nav className={style.pageNumbers}>
          <button onClick={() => setPage(1)}>1</button>
          <button onClick={() => setPage(2)}>2</button>
          <button onClick={() => setPage(3)}>3</button>
          <button onClick={() => setPage(4)}>4</button>
          <button onClick={() => setPage(5)}>5</button>
        </nav>
        <button
          className={style.navigate}
          onClick={() => {
            if (page !== 5) {
              setPage(page + 1);
            }
          }}
        >
          Next {">"}
        </button>
      </div>
    </div>
  );
}

export default Github;
