const Contact = () => {
    return(
        <div>
            <h1>Contact Page</h1>
            <form>
                <input type="text" placeholder="name" className="form-input"/>
                <input type="text" placeholder="Message" className="form-input" />
                <button className="submit">Submit</button>
            </form>
        </div>
    )
}
export default Contact;