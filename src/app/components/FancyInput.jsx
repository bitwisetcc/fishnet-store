export default ({ label, required, ...props }) => (
  <div className="field">
    <input className="peer" type="text" required={required} placeholder=" " />
    <label className="peer-focus:top-1 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">
      {label}
    </label>
  </div>
);
