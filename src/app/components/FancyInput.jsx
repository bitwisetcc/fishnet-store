export default ({ label, required, ...props }) => (
  <div className="field">
    <input className="peer" type="text" required={required} />
    <label className="peer-focus:text-xs peer-focus:top-1">{label}</label>
  </div>
);
