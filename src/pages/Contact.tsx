import ButtonComponent from "../components/ButtonComponent"
import InputComponent from "../components/InputComponent"
import TextAreaComponent from "../components/TextAreaComponent"


const Contact = () => {
  return <div className="flex flex-col container mt-20">
    <div className="flex justify-center items-center flex-col my-4">
      <p className="text-center text-gray-700 text-base mb-6 max-w-xl">
        Have an enquiry or a project in mind? Fill out the form below and our team will get back to you promptly.
      </p>
      <form action="" className="flex flex-col justify-center items-center  gap-6 w-full max-w-[400px] ">
        <div className="w-full flex flex-col ">
<InputComponent name="full name" type="text" label="full name"/>
        </div>

        <div className="w-full flex flex-col ">

<InputComponent name="email" type="email" label="Email"/>
        </div>

        <div className="w-full flex flex-col ">

<InputComponent name="subject" type="email" label="subject"/>
        </div>

        <div className="w-full">
        <TextAreaComponent label="description"/>
        </div>
        <div className="w-full flex justify-center items-center">

       <ButtonComponent label="submit"/>
        </div>

      </form>
    </div>
  </div>
}
export default Contact
