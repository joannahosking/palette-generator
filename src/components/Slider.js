const Slider = (props) => {
    const {shift, setShift} = {...props};
    const max = 30;

    return (
        <div className="shift-slider">
        <label>Shift:</label>
        <div className="wrapper">
            <input type="range" min="0" max={max} value={shift} onChange={(e) => setShift(e.target.value)} />
            <span className="slide" style={{transform: `scaleX(${shift / max})`}}></span>
            <span className="background"></span>
            <span className="handle" style={{left: (shift / max) * 100 + '%'}}>{shift}</span>
        </div>
        </div>
    );
}

export default Slider;