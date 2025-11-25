

import ButtonComponent from "../components/ButtonComponent"
import ImageUpload from "../components/ImageUpload"
import InputComponent from "../components/InputComponent"
import TextAreaComponent from "../components/TextAreaComponent"


// import React from 'react'


const CreateInsight = () => {
  return (
    <div className="flex flex-col w-full mt-12">
<div className="flex flex-col w-full items-center justify-center min-h-screen  p-4">
<div className=" rounded-lg p-6 max-w-lg w-full">
  <ImageUpload/>
</div>
<div className="flex flex-col w-full max-w-lg mx-auto mt-0">
  <InputComponent name="title" type="text" label="Title" />
</div>
<div className="flex flex-col w-full max-w-lg mx-auto mt-4">
  <TextAreaComponent label="Description" />
</div>
<div className="flex flex-col w-full max-w-lg mx-auto mt-4">
  <ButtonComponent label="Create Insight" className="mt-4 w-full max-w-lg mx-auto" />
</div>
</div>

    </div>
  )
}

export default CreateInsight