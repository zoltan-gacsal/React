const Display = () => {
  return (
    <div className="container mt-5" style={{ maxWidth: "800px" }}>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="col">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="country" className="form-label">
            Lakhely (Ország)
          </label>
          <select name="country" className="form-control"></select>
        </div>
        <div className="col">
          <label htmlFor="city" className="form-label">
            Város
          </label>
          <input type="text" className="form-control" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="phone" className="form-label">Telefonszám</label>
          <input type="text" className="form-control"  />          
        </div>
        <div className="col">
          <label htmlFor="birthday" className="form-label">Születési dátum</label>
          <input type="date" className="form-control" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="password" className="form-label">Jelszó</label>
          <input type="password" className="form-control" />
        </div>
        <div className="col">
          <label htmlFor="passwordConfirm" className="form-label">Jelszó ismét</label>
          <input type="password" className="form-control" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="form-check">
          <input type="radio" className="form-check-input"  />
          <label htmlFor="man" className="form-check-label">Férfi</label>
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" />
          <label htmlFor="woman" className="form-check-label">Nő</label>
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" />
          <label htmlFor="other" className="form-check-label">Egyéb</label>
        </div>
      </div>

      <div className="row mb3">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" />
          <label htmlFor="accepted" className="form-check-label">
            A felhasználási feltéteket elfogadom!
          </label>
        </div>
      </div>

      <div className="row mt-3">
        <button type="button" className="btn btn-primary d-block my-auto">Regisztráció</button>
        <p className="text-center mt-3"><a href="#">Elfelejtetted jelszavad?</a></p>
      </div>

    </div>
  );
};

export default Display;
