
const ConnectActive = () => {
  return (
    <div className="p-4 w-full flex justify-center"><form className="flex flex-col items-start gap-5 w-4/5" action="send">
      <label>Who are you:</label>
      <input placeholder="name" type="text" />
      <label>Your e-mail:</label>
      <input placeholder="exampel@mail.com" type="email" />
      <label>Message:</label>

      <textarea placeholder="Write somthing to me..." className=" h-52 w-full"></textarea>
      <div className="flex justify-center w-full"><button type="submit">Send</button></div>
      </form></div>
  )
}

export default ConnectActive