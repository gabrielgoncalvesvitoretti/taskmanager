function Button(props) {
  return (
    <button {...props} className="bg-slate-500 p-2 rounded-md">
      {props.children}
    </button>
  );
}

export default Button;
