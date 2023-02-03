import axios from "axios";
import React from "react";

type FormEvent = React.FormEvent<HTMLFormElement>;

const Mobile = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    console.log(inputRef?.current?.value);

    try {
      const { data } = await axios({
        method: "post",
        url: "/api/screenshot",
        responseType: "json",
        data: {},
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Mobile Authentication</h1>
      <form onSubmit={onSubmit}>
        <span>+91</span>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter your mobile number"
        />
        <button>Get OTP</button>
      </form>
    </div>
  );
};
export default Mobile;
