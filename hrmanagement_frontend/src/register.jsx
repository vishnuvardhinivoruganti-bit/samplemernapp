function register() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Enter your name" /><br />
        <input type="email" placeholder="Enter your email" /><br />
        <input type="password" placeholder="Enter your password" /><br />
        <button type="submit">Register</button>
        <select>
            <option value="employee">Employee</option>
            <option value="hr">HR</option>
            <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default register;