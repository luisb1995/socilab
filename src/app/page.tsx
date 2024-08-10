"use client"
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import { GiWorld } from "react-icons/gi";
import { ImLab } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { TbWorldWww } from "react-icons/tb";
import {  useEffect, useState } from "react";
import PhoneInput from 'react-phone-input-2';
import Select, { ActionMeta, GroupBase, OptionProps, SingleValue } from 'react-select';
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./page.module.css";
import 'react-phone-input-2/lib/style.css'
import "./globals.css";
import Link from "next/link";

export default function Home() {

        const [isSignUp, setIsSignUp] = useState(false);
        const [phone, setPhone] = useState('');
        

       
        const handleSignIn = () => {
          setIsSignUp(!isSignUp);
          
          
        };

        const [isFocused, setIsFocused] = useState(false);

        const handleFocus = () => {
          setIsFocused(true);
        };

        const handleBlur = () => {
          setIsFocused(false);
        };

        interface Country {
          value: string;
          label: string;
          flag: string;
        }
        const countries = [
          { value: 'Argentina', label: 'Argentina', flag: 'https://flagpedia.net/data/flags/icon/72x54/ar.png' },
          { value: 'Bolivia', label: 'Bolivia', flag: 'https://flagpedia.net/data/flags/icon/72x54/bo.png' },
          { value: 'Brasil', label: 'Brasil', flag: 'https://flagpedia.net/data/flags/icon/72x54/br.png' },
          { value: 'Chile', label: 'Chile', flag: 'https://flagpedia.net/data/flags/icon/72x54/cl.png' },
          { value: 'Colombia', label: 'Colombia', flag: 'https://flagpedia.net/data/flags/icon/72x54/co.png' },
          { value: 'Costa rica', label: 'Costa Rica', flag: 'https://flagpedia.net/data/flags/icon/72x54/cr.png' },
          { value: 'Honduras', label: 'Honduras', flag: 'https://flagpedia.net/data/flags/icon/72x54/hn.png' },
          { value: 'Mexico', label: 'Mexico', flag: 'https://flagpedia.net/data/flags/icon/72x54/mx.png' },
          { value: 'Ecuador', label: 'Ecuador', flag: 'https://flagpedia.net/data/flags/icon/72x54/ec.png' },
          { value: 'España', label: 'España', flag: 'https://flagpedia.net/data/flags/icon/72x54/es.png' },
          { value: 'Paraguay', label: 'Paraguay', flag: 'https://flagpedia.net/data/flags/icon/72x54/py.png' },
          { value: 'Uruguay', label: 'Uruguay', flag: 'https://flagpedia.net/data/flags/icon/72x54/uy.png' },
          { value: 'Peru', label: 'Peru', flag: 'https://flagpedia.net/data/flags/icon/72x54/pe.png' },
          { value: 'Nicaragua', label: 'Nicaragua', flag: 'https://flagpedia.net/data/flags/icon/72x54/ni.png' },
          { value: 'Panama', label: 'Panama', flag: 'https://flagpedia.net/data/flags/icon/72x54/pa.png' },
          { value: 'El salvador', label: 'El salvador', flag: 'https://flagpedia.net/data/flags/icon/72x54/sv.png' },
          { value: 'Republica Dominicana', label: 'R. Dominicana ', flag: 'https://flagpedia.net/data/flags/icon/72x54/bo.png' },
          { value: 'Venezuela', label: 'Venezuela', flag: 'https://flagpedia.net/data/flags/icon/72x54/ve.png' },
           
        ];
        const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

        const handleChange = (newValue: SingleValue<Country>, actionMeta: ActionMeta<Country>) => {
          if (newValue) {
            setSelectedCountry(newValue); // Update the state with the new value
          } else {
            setSelectedCountry(null);
          }
        };

        useEffect(() => {
          const container = document.getElementById('container');
          const signInButton = document.getElementById('signIn');
          const signUpButton = document.getElementById('signUp');
      
          const handleFocusChange = (event: Event) => {
            if (event.target === signInButton) {
              container?.classList.remove('right-panel-active');
              container?.classList.remove('container');
              container?.classList.add('container');
            } else if (event.target === signUpButton) {
              container?.classList.remove('container');
              container?.classList.add('container');
              container?.classList.add('right-panel-active');
            }
          };
      
          signInButton?.addEventListener('focus', handleFocusChange);
          signUpButton?.addEventListener('focus', handleFocusChange);
      
          return () => {
            signInButton?.removeEventListener('focus', handleFocusChange);
            signUpButton?.removeEventListener('focus', handleFocusChange);
          };
        }, []);

  return (
    <main className={styles.main}>
          <section className={`container ${isSignUp ? "right-panel-active" : ""} `} id="container">           
                
                  <section className="form-container sign-in-container">
                        <form >
                            <h1>Iniciar Sesion</h1>
                        
                            <label htmlFor="email" className="email"> 
                                  <HiOutlineMail className="icon"/>
                                  <input type="email" id="email" placeholder="Email" className="input"  />
                            </label>

                            <label htmlFor="password"> 
                                <RiLockPasswordLine className="icon"/>
                                <input type="password" id="password" placeholder="Password" className="input" />
                            </label>

                            <a href="#" className="btnOlvidaste">Olvidaste tu contraseña?</a>

                            <button className="btnIngresar">Ingresar</button>

                            <div className="social-container">
                              <span>------- o inicia con tu cuenta de --------</span> 
                              <button className="btnGoogle " ><FcGoogle className="google"/> Google</button>                
                          </div>
                        </form>
                  </section>
          <div className="form-container sign-up-container">
                <form action="#">

                      <h1 className="titleUp">Crear Cuenta</h1>

                      <label htmlFor="nameApell"> 
                            <FaRegUser  className="iconUserR"/>
                            <input type="text" id="nameApell"  placeholder="Nombre y Apellido" className="input" required/>
                      </label>

                      <label htmlFor="ema"> 
                           <HiOutlineMail className="iconEmailR"/>
                          <input type="email" id="ema"  placeholder="Email" className="input" required />
                      </label>
                      <label htmlFor="pass"> 
                          <RiLockPasswordLine className="iconPassR"/>
                          <input type="password" id="pass"  placeholder="Contraseña" className="input" required/>

                      </label>
                          <label htmlFor="rePass"> 
                              <RiLockPasswordLine className="iconPassR"/>
                              <input type="password" id="rePass"  placeholder="Repita su contraseña" className="input" required />
                          </label>
                 
                      <label htmlFor="pais">
                      <GiWorld className="iconWorldR"/>
                      <Select
                        options={countries}
                        value={selectedCountry}
                        onChange={handleChange}
                        id="pais"
                        className={`selectPaisesR ${isFocused ? 'focused' : ''}`}
                        placeholder="Seleccione el pais"
                        formatOptionLabel={(option: Country) => (
                          <div className="divPaisR" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={option.flag} alt={option.label} style={{ width: 20, marginRight: 10 }} />
                            {option.label}
                          </div>
                        )}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        styles={{
                              control:(styles,state) =>{
                                return {...styles,
                                     borderColor: state.menuIsOpen ? '#aae1e9' : '#aae1e9',
                                     
                                     borderRadius:"6px",
                                    "&:hover": {borderColor:"#aae1e9"},
                                    
                                }
                              },
                            
                         } }
                        />   
                      </label>

                  
          
                      <PhoneInput
                        country={"ar"}
                        value={phone}
                        onChange={(e)=>setPhone(e)}
                        placeholder="Telefono"
                        inputClass={`phoneInp ${isFocused ? 'focused' : ''}`}
                        dropdownClass="phone-dropdown"
                        containerStyle={{width:"320px", marginTop:"15px", marginLeft:"-20px"}}
                        dropdownStyle={{width:"320px"}}
                        inputStyle={{borderColor:"#aae1e9", width:"300px", marginLeft:"42px",paddingLeft:"10px", borderRadius:"6px" }}
                        buttonStyle={{borderRadius:"6px",  background:"transparent" }}
                        onlyCountries={['ar', 'bo', 'br', 'cl', 'co', 'cr', 'cu', 'do', 'ec', 'sv', 'gt', 'hn', 'mx', 'ni', 'pa', 'py', 
                                        'pe', 'pr', 'uy', 've']}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />

                       <label htmlFor="nameLab"> 
                            <ImLab  className="iconUserR"/>
                            <input type="text" id="nameLab"  placeholder="Nombre del laboratorio" className="inputNameLab" required/>
                      </label>

                       <span className="titleLab">Nombre de la pagina de su laboratorio en la nube: </span>

                       <div className="divN">
                          <TbWorldWww className="iconPassRe"/>
                          <div className="nameUrl" >
                                <label htmlFor="npagin"> 
                                        <input type="text" required id="npagin"  placeholder="Nombre para la pagina" className="input2"  />
                                        <div className="titlePagin">.socilabcloud.com</div>  

                                    </label>
                            </div>

                        </div>
                        <div className="recaptcha">
                        <ReCAPTCHA
                              sitekey="6LdGWyMqAAAAAMl0anAIuoUlTWpHenzRtdbUiHvG"                             
                            />
                        </div>
                        <section className="termYcond">
                            <input type="checkbox"  id="terms-and-conditions" name="terms-and-conditions" required/> 
                            <span className="lTermyCond">Al registrarse usted acepta nuestra <Link href="" className="link">  política de privacidad </Link> 
                                  <Link href="" className="link"> y los términos de uso.</Link> 
                            </span>
                        
                         </section>   
                         <button className="btnCrearCuenta">Crear Cuenta</button> 
                </form>
          </div>
                
              
        <section className={`overlay-container `}>
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>¡Bienvenido de nuevo!</h1>
              <p>Para mantenerse conectado con nosotros, inicie sesión con su información personal.</p>
              <button className="ghost" id="signIn" onClick={handleSignIn}>Iniciar sesion</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hola, amig@!</h1>
              <p>Ingresa tus datos personales y comienza a utlizar nuestro sofware SOCILAB! </p>
              <button className="ghost" id="signUp" onClick={handleSignIn}>Registrate</button>
            </div>
          </div>
        </section>
      </section>

  
    </main>
  );
}
