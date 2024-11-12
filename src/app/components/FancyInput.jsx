export default ({ label, required, name, htmlAccept = "text" }) => (
  <div className="field">
    <input
      className="peer"
      name={name}
      type={htmlAccept}
      required={required}
      placeholder=" "
    />
    <label className="peer-focus:top-1 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">
      {label}
    </label>
  </div>
);

export function StatefullFancyInput({
  label,
  required,
  name,
  htmlAccept = "text",
  setter = null,
  bye = null,
  state = "",
}) {
  return (
    <div className="field">
      <input
        className="peer"
        name={name}
        type={htmlAccept}
        required={required}
        placeholder=" "
        onBlur={(e) => bye && bye(e.target.value)}
        onChange={(e) => setter(e.target.value)}
        value={state}
      />
      <label className="peer-focus:top-1 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">
        {label}
      </label>
    </div>
  );
}
