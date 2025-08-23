import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/trash.png";
import api from "../../services/api";

function Home() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    const usersFromAPI = await api.get("/usuarios");
    setUsers(usersFromAPI.data);
  }

  async function createUsers() {
    setError("");
    const email = inputEmail.current.value;
    const userExists = users.some((user) => user.email === email);
    
    if (userExists) {
      setError("Royal Guard! Esse usuario já existe!");
      return;
    }

    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });
  
    getUsers();
    inputName.current.value = "";
    inputAge.current.value = "";
    inputEmail.current.value = "";
  }
  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);
    getUsers();
  }

  useEffect(() => {
    //utilizei esse 'useEffect' para consertar o erro da função 'getUsers' ser declarada mas nunca lida
    getUsers();
  }, []);
  // se eu quiser adicionar um comando javascript no html é só eu abrir essas chaves{} e colocar meu comando dentro delas
  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="nome" type="text" ref={inputName} />
        <input placeholder="Idade" name="idade" type="number" ref={inputAge} />
        <input placeholder="E-mail" name="email" type="email" ref={inputEmail}/>
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
          {error && <p style={{ color: "rgba(235, 221, 26, 0.925)", marginTop: "8px" }}>{error}</p>}
      </form>

      {users.map(
        (
          user // parece que esse 'map' serve para mapear os usuarios, como se fosse uma especie de parametro que pega as informações que estão em 'users' e passa para esse 'user' que eu criei
        ) => (
          <div key={user.id} className="fox">
            <div>
              <p>
                Nome: <span>{user.name}</span>{" "}
              </p>
              <p>
                Idade: <span>{user.age}</span>{" "}
              </p>
              <p>
                Email: <span>{user.email}</span>{" "}
              </p>
            </div>
            <button onClick={() => deleteUsers(user.id)}>
              <img src={Trash} width={32} height={28} className="lixo" />
            </button>
          </div>
        )
      )}
    </div>
  );
}
export default Home;
