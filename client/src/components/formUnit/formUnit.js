import './formUnit.css';

function Formunit(props) {
    return (
        <div className='formUnit'>
            <label>{props.label}</label>
            <div class="formUnit__input">
                <input class="input" placeholder="..." required="" type={props.type} value={props.value} onChange={props.onChange} />
                <span class="input-border"></span>
            </div>
        </div>
    );
}

export default Formunit;