import { SubmitHandler, useForm } from "react-hook-form";
import { MenuContext } from "../../../contexts/MenuContextFile";

//styling
import "./contact.css";
import { useContext } from "react";

interface FormData {
  name: string;
  email: string;
  phone: number;
  message: string;
}

const Contact = () => {

  const context = useContext(MenuContext);

  if(!context)
  {
    throw new Error("MenuContext must be used within a MenuContextProvider")
  }
  
  // const [validPhone, setValidPhone] = useState(true);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //     e.preventDefault();
  //     const numberRegex: RegExp = /^(\+234|0)(70|80|81|90|91|92|93|94|95|96|97|98|99)[0-9]{8}$/
  //     if(phone.match(numberRegex))
  //     {
  //         setName("");
  //         setEmail("");
  //         setPhone("");
  //         setMessage("");
  //         setValidPhone(true);
  //         window.alert("Your form has been submited sucessfully");
  //     }
  //     else
  //     {
  //         setValidPhone(false);
  //     }
  // }

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
  return (
    <>
      <section className="contact-us" id="contact-us">
        
        <div className="contact-header">
          <h2>Contact Us</h2>
        </div>
        <div className="form-message">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, voluptas consequuntur? Nemo rem doloremque vel facilis cum, autem officiis magnam aliquam eligendi laborum laudantium ut nulla veniam facere ad sit possimus incidunt. Ipsa illum, harum itaque est voluptatibus accusantium ducimus similique totam sint nesciunt soluta fugit, labore magnam! Pariatur, nulla.
        </div>
        <div className="form-and-message">
          <div className="contact-form">
            <form className="form-section" onSubmit={handleSubmit(onSubmit)}>
              <div className="name-input">
                <label htmlFor="name">Name: </label>
                <br />
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: "The name field is required.",
                    minLength: 2,
                    maxLength: 250,
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Enter a valid username.",
                    },
                  })}
                />{" "}
                <br />
                {errors.name && <p style={{color: "crimson"}}>{errors.name.message}</p>}
              </div>
              <div className="email-input">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "The email field is required.",
                    pattern: {
                      value:
                        /^[A-Za-z]+\d*(\.[A-Za-z]+\d*)?@[A-Za-z]+\d*\.(com|ng)$/i,
                      message: "Invalid email address.",
                    },
                  })}
                />
                <br />
                {errors.email && <p style={{color: "crimson"}}>{errors.email.message}</p>}
              </div>
              <div className="phone-input">
                <label htmlFor="phoneno">Phone No.</label>
                <br />
                <input
                  type="text"
                  id="phoneno"
                  {...register("phone", {
                    required: "The phone number field is required",
                    pattern: {
                      value:
                        /^(\+234|0)(70|80|81|90|91|92|93|94|95|96|97|98|99)[0-9]{8}$/,
                      message: "Invalid phone number.",
                    },
                  })}
                />
                <br />
                {errors.phone && <p style={{color: "crimson"}}>{errors.phone.message}</p>}
              </div>

              <div className="message-input">
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                  id="message"
                  cols={30}
                  rows={10}
                  placeholder="message"
                  {...register("message", {
                    required: "This field is required",
                    minLength: 10,
                    maxLength: 250
                  })}
                ></textarea>
                <br />
                {errors.message && <p style={{color: "crimson"}}>{errors.message.message}</p>}
              </div>
              <button disabled={isSubmitting} type="submit">Submit</button>
            </form>
          </div>
          <div className="contact-us-image">
            <div className="contact-img-section">
              <img className="contact-image" src="/islandimages/contactus2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
