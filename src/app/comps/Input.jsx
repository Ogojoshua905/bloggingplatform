

export default function Input({type, usern, place, userid, }) {
    return (
      <input type={type} name={usern} placeholder={place} id={userid} className=" border-none appearance-none h-12 w-[350px] text-black" />
    )
  }