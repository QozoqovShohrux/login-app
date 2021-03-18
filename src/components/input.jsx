const Input = ({name,label,errors,type="text",...args}) => {
 return ( 
  <div className="form-group">
  <label htmlFor={name}>{label}: </label>
  <input
    name={name}
    id={name}
    placeholder= {`Enter your ${label}`}
    className="form-control"
    {...args}
  />
  {errors && <div className="text-danger py-1 ">{errors}</div>}
</div>
  );
}
 
export default Input;