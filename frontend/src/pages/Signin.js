import React, { useEffect, useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  return (
    <body>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div class="d-flex justify-content-center py-4">
              <a
                href="index.html"
                class="logo d-flex align-items-center w-auto"
              >
                <img src="assets/img/logo.png" alt="" />
                <span class="d-none d-lg-block">NiceAdmin</span>
              </a>
            </div>

            <div class="card mb-3">
              <div class="card-body">
                <div class="pt-4 pb-2">
                  <h5 class="card-title text-center pb-0 fs-4">
                    Create an Account
                  </h5>
                  <p class="text-center small">
                    Enter your personal details to create account
                  </p>
                </div>

                <form class="row g-3 needs-validation" novalidate>
                  <div class="col-12">
                    <label for="name" class="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      required
                    />
                    <div class="invalid-feedback">Please, enter your name!</div>
                  </div>

                  <div class="col-12">
                    <label for="email" class="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      id="email"
                      required
                    />
                    <div class="invalid-feedback">
                      Please enter a valid Email adddress!
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="type" class="form-label">
                      Type
                    </label>
                    <div class="input-group has-validation">
                      <select
                        name="type"
                        class="form-select"
                        aria-label="Default select example"
                        id="type"
                      >
                        <option selected disabled>
                          Select a user type
                        </option>
                        <option value="customer">Customer</option>
                        <option value="buyer">Buyer</option>
                      </select>
                      <div class="invalid-feedback">
                        Please choose a user type.
                      </div>
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="pass" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="pass"
                      class="form-control"
                      id="pass"
                      required
                    />
                    <div class="invalid-feedback">
                      Please enter your password!
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="repeatPass" class="form-label">
                      Repeat Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      id="yourPassword"
                      required
                    />
                    <div class="invalid-feedback">
                      Please repeat the above password!
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        name="terms"
                        type="checkbox"
                        value=""
                        id="acceptTerms"
                        required
                      />
                      <label class="form-check-label" for="acceptTerms">
                        I agree and accept the{" "}
                        <a href="#">terms and conditions</a>
                      </label>
                      <div class="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary w-100" type="submit">
                      Create Account
                    </button>
                  </div>
                  <div class="col-12">
                    <p class="small mb-0">
                      Already have an account?{" "}
                      <a href="pages-login.html">Log in</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Signin;
