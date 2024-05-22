import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import API from '../../../utils/API';
import './Estimate.css'

export default function Estimate(props) {
    useEffect(() => window.scrollTo(0, 0), []);

    const navigate = useNavigate();

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = 'Are you sure you want to leave? Your changes may not be saved.';
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const [email, setEmail] = useState('')
    const [fn, setFn] = useState('')
    const [ln, setLn] = useState('')
    const [tel, setTel] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')

    const [isChecked, setIsChecked] = useState(false);
    const [state, setState] = useState('')
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setState(isChecked ? '' : 'WA');
    };

    const [zip, setZip] = useState('')
    const [year, setYear] = useState('')
    const [desc, setDesc] = useState('')
    const [add, setAdd] = useState('')

    console.log(email, fn, ln, tel, address, state, zip, year, desc, add)

    const handleChange = e => {
        if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "fn") {
            setFn(e.target.value)
        } else if (e.target.name === "ln") {
            setLn(e.target.value)
        } else if (e.target.name === "tel") {
            setTel(e.target.value)
        } else if (e.target.name === "address") {
            setAddress(e.target.value)
        } else if (e.target.name === "city") {
            setCity(e.target.value)
        } else if (e.target.name === "state") {
            setState(e.target.value)
        } else if (e.target.name === "zip") {
            setZip(e.target.value)
        } else if (e.target.name === "year") {
            setYear(e.target.value)
        } else if (e.target.name === "desc") {
            setDesc(e.target.value)
        }else if (e.target.name === "add") {
            setAdd(e.target.value)
        }
        else {
            console.log('bruh')
        }
    }

    const [date1, setDate1] = useState(false)
    const [date2, setDate2] = useState(false)
    const [date3, setDate3] = useState(false)

    const [opt1, setOpt1] = useState(false)
    const [opt2, setOpt2] = useState(false)
    const [opt3, setOpt3] = useState(false)
    const [opt4, setOpt4] = useState(false)
    const [opt5, setOpt5] = useState(false)
    const [opt6, setOpt6] = useState(false)
    const [opt7, setOpt7] = useState(false)
    const [opt8, setOpt8] = useState(false)

    const submitHandler = e => {
        e.preventDefault()
        API.sendForm({
            email: email,
            firstName: fn,
            lastName: ln,
            phone: tel,
            address: address,
            city: city,
            state: state,
            zip: zip,
            year: year,
            message: desc,
            add: add
        })
            .then(data => {
                console.log(data)
                navigate("/email-sent")

            }).catch(err => {
                console.log(err)
                alert(err)
            })
    }

    useEffect(() => window.scrollTo(0, 0), []);
    return (
        <>
            <Header type={props.type} />
            <main>
                <section className='quote-sec-1'>
                    <h1>Whidbey Island Handyman</h1>
                </section>

                <section className='quote-sec-2'>
                    <form onSubmit={submitHandler}>

                        <div className='form-div'>
                            <label htmlFor="fn">First Name:</label>
                            <input onChange={handleChange} name='fn' value={fn} type="text" />
                        </div>

                        <div className='form-div'>
                            <label htmlFor="ln">Last Name:</label>
                            <input onChange={handleChange} name='ln' value={ln} type="text" />
                        </div>

                        <div className='form-div'>
                            <label htmlFor="description">Please type a detailed description of the work requested. The more info you share, the more accurate a Estimate we can provide.</label>
                            <textarea onChange={handleChange} name='desc' value={desc} id="description" cols="50" rows="5"></textarea>
                        </div>
                        
                        <div className='form-div'>
                            <label htmlFor="email"> Enter your email:</label>
                            <input onChange={handleChange} name='email' value={email} type="email" id='email' />
                        </div>

                        <div className='form-div'>
                            <label htmlFor="tel">Enter your phone number:</label>
                            <input onChange={handleChange} name='tel' value={tel} type="tel" />
                        </div>

                        <div className='form-div'>
                            <label htmlFor="address">Address of Work Requsted:</label>
                            <input onChange={handleChange} name='address' value={address} type="text" />
                        </div>

                        <div className='form-div'>
                            <label htmlFor="city">City:</label>
                            <input onChange={handleChange} name='city' value={city} type="text" />
                        </div>

                        <div className='form-div'>
                            <label>State</label>
                            <label>
                                <input onChange={handleCheckboxChange} checked={isChecked} type="checkbox" id='state' />
                                WA
                            </label>
                        </div>

                        <div className='form-div'>
                            <label htmlFor="zip">Zip Code</label>
                            <input onChange={handleChange} name='zip' value={zip} type="text" />
                        </div>

                        <div className='form-div'>
                            <label htmlFor="year">What decade was your home built in? If work is being done in an addition, what decade was the addition added?</label>
                            <input onChange={handleChange} name='year' value={year} type="text" />
                        </div>


                        <div className='form-div'>
                            <label>When would you like this work done?</label>
                            <input onChange={handleChange} name='date1' value={date1} type="checkbox" />
                            <input onChange={handleChange} name='date2' value={date2} type="checkbox" />
                            <input onChange={handleChange} name='date3' value={date3} type="checkbox" />
                        </div>

                        <div className='form-div'>
                            <label htmlFor="desc">Please describe the photos you've uploaded and what you need changed / updated.</label>
                            <input type="text" />
                        </div>

                        <div className='form-div'>
                            <label htmlFor="add">Any additional information you'd like for me to know?</label>
                            <input onChange={handleChange} name='add' value={add} type="text" />
                        </div>

                        <div className='form-div'>
                            <label>How did you find Whidbey Island Handyman?</label>
                            <input onChange={handleChange} name='opt1' value={opt1} type="checkbox" />
                            <input onChange={handleChange} name='opt2' value={opt2} type="checkbox" />
                            <input onChange={handleChange} name='opt3' value={opt3} type="checkbox" />
                            <input onChange={handleChange} name='opt4' value={opt4} type="checkbox" />
                            <input onChange={handleChange} name='opt5' value={opt5} type="checkbox" />
                            <input onChange={handleChange} name='opt6' value={opt6} type="checkbox" />
                            <input onChange={handleChange} name='opt7' value={opt7} type="checkbox" />
                            <input onChange={handleChange} name='opt8' value={opt8} type="checkbox" />
                        </div>
                        <button type='submit'><h3>Submit</h3></button>
                    </form>
                </section>
            </main>
        </>
    )
}