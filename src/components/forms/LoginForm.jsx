import { useState } from "react";
import Input from "../ui/Input";
import { validatePassword, validateUsername } from "../../utils/validation";
import { loginUser } from "../../services/api";
import Button from "../ui/Button";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    username: "",
    password: "",
    submit: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "username") {
      setError((prev) => ({
        ...prev,
        username: validateUsername(value),
      }));
    }

    if (name === "password") {
      setError((prev) => ({
        ...prev,
        password: validatePassword(value),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usernameError = validateUsername(formData.username);
    const passwordError = validatePassword(formData.password);

    if (usernameError || passwordError) {
      setError((prev) => ({
        ...prev,
        username: usernameError,
        password: passwordError,
      }));
    }

    setIsLoading(true);

    try {
      const response = await loginUser(formData);
      console.log("kullanıcı bilgileri: ", response);
    } catch (error) {
      console.error(error);
      setError((prev) => ({
        ...prev,
        submit: error.message,
      }));
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          type="text"
          name="username"
          label="Kullanıcı Adı: "
          placeholder="Kullanıcı adınızı giriniz"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          type="password"
          name="password"
          label="Şifre: "
          placeholder="Şifrenizi giriniz"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <Button type="submit">{isLoading ? "yükleniyor" : "giriş yap"}</Button>
    </form>
  );
};
export default LoginForm;
