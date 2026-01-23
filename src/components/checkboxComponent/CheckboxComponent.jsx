import './checkbox-style.css';

const CheckboxComponent = ({ label, checked, onChange, name }) => {
  return (
    <label className="checkbox-container text-center flex items-center justify-center w-full">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span className="checkmark "></span>
      <span className='checkboxText text-xs font-bold text-(--color1)'>{label}</span>
    </label>
  )
}

export default CheckboxComponent
