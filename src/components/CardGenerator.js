import React from 'react';
import AddImageButton from './AddImageButton';
import FillInItem from './FillInItem';
import RadioButtonsList from './RadioButtonsList';
import Collapsibles from './Collapsibles';
import logoAdalab from '../images/logo-adalab.png';
import logoTeam from '../images/octomeow.png';
import logoCard from '../images/tarjetas-molonas.svg';
import PreviewCard from './PreviewCard';
import { Link } from 'react-router-dom';
import '../scss/main.scss';

class CardGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        palette: 1,
        name: '',
        job: '',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
        photo: ''
      },
      isOpen: 1
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.openPanel = this.openPanel.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
  }
  handleInputChange(event) {
    const key = event.target.name;
    this.setState({
      data: {
        ...this.state.data,
        [key]: event.target.value
      }
    });
  }

  openPanel(e) {
    const target = parseInt(e.currentTarget.id);
    this.setState((prevState, props) => {
      let newOpen;
      prevState.isOpen === target ? (newOpen = 4) : (newOpen = target);
      return {
        isOpen: newOpen
      };
    });
  }

  handleRadioClick(event){
    const target = parseInt(event.currentTarget.value)
    this.setState({
      ...this.state,
      data: {
        palette: target,
      }
    });

  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className='App'>
        <header className='header wrapper'>
          <section className='header--container main-container'>
            <Link to='/'>
              <img
                className='logo'
                src={logoCard}
                alt='logo awesome profile cards'
              />
            </Link>
          </section>
        </header>

        <main className='cards__container'>
          <form className='form' action='' method='POST'>
            <div className='wrapper'>
              <fieldset className='form__preview'>
                <PreviewCard palette={this.state.data.palette}/>
              </fieldset>
              <div className='form__content'>
                <fieldset className='form__design'>
                  <Collapsibles
                    title='Diseña'
                    icon='far fa-object-ungroup fa-lg legend__icon'
                    openPanel={this.openPanel}
                    id={1}
                    arrow={isOpen === 1 ? 'up' : 'down'}
                  />

                  <div
                    className={`option__distribution ${
                      isOpen === 1 ? '' : 'hidden'
                    } collapsibles`}
                    htmlFor='colors'
                  >
                    <label className='option__title legend__subtitle'>
                      Colores
                    </label>
                    <RadioButtonsList 
                      handlerRadio={this.handleRadioClick} 
                      selectedPalette={this.state.data.palette}
                    />
                  </div>
                </fieldset>
                <fieldset className='form__fill-in'>
                  <Collapsibles
                    title='Rellena'
                    icon='far fa-keyboard legend__icon'
                    openPanel={this.openPanel}
                    id={2}
                    arrow={isOpen === 2 ? 'up' : 'down'}
                  />

                  <div
                    className={`fill-in__items ${
                      isOpen === 2 ? '' : 'hidden'
                    } collapsibles`}
                  >
                    <FillInItem
                      forId='full_name'
                      labelName='Nombre completo'
                      type='text'
                      name='name'
                      place='Sally Jill'
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />

                    <FillInItem
                      forId='job'
                      labelName='Puesto'
                      type='text'
                      name='job'
                      place='Front-end'
                      value={this.state.job}
                      onChange={this.handleInputChange}
                    />

                    <div className='fill-in__item'>
                      <label className='fill-in__label' htmlFor='img-profile'>
                        Imagen de perfil
                      </label>
                      <div className='fill-in__buttonImg-wrapper'>
                        <AddImageButton
                          className='fill-in__button fill-in__buttonLabel js__profile-trigger'
                          value='Añadir imagen'
                        />
                        <input
                          name='photo'
                          type='file'
                          id='img-selector'
                          className='action__hiddenField js__profile-upload-btn input-update'
                        />
                        <div className='img-profile__preview js__profile-preview profile__preview' />
                      </div>
                    </div>
                    <FillInItem
                      forId='phone'
                      labelName='Teléfono'
                      type='tel'
                      name='phone'
                      place='612345698'
                      value={this.state.phone}
                      onChange={this.handleInputChange}
                    />

                    <FillInItem
                      forId='email'
                      labelName='Email'
                      type='email'
                      name='email'
                      place='sally-jill@gmail.com'
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />

                    <FillInItem
                      forId='linkedin'
                      labelName='Linkedin'
                      type='text'
                      name='linkedin'
                      place='sallyhill'
                      value={this.state.linkedin}
                      onChange={this.handleInputChange}
                    />

                    <FillInItem
                      forId='github'
                      labelName='Github'
                      type='text'
                      name='github'
                      place='sally-hill'
                      value={this.state.github}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </fieldset>
                <fieldset className='form__share'>
                  <Collapsibles
                    title='Comparte'
                    icon='fas fa-share-alt legend__icon legend__icon--share'
                    openPanel={this.openPanel}
                    id={3}
                    arrow={isOpen === 3 ? 'up' : 'down'}
                  />
                  <div
                    className={`share__container ${
                      isOpen === 3 ? '' : 'hidden'
                    } collapsibles`}
                  >
                    <button className='share-button' type='button'>
                      <i className='far fa-address-card' /> Crear tarjeta
                    </button>
                    <section className='section__twitter collapsible__hidden'>
                      <h3 className='title-twitter'>
                        La tarjeta ha sido creada:
                      </h3>
                      <a className='title-twitter-content' href='/' />

                      <button className='button-twitter'>
                        <a className='twitter-link' href='/' target='_top'>
                          <i className='fab fa-twitter twitter-icon' />
                          Compartir en Twitter
                        </a>
                      </button>
                    </section>
                  </div>
                </fieldset>
              </div>
            </div>
          </form>
        </main>
        <footer className='main-footer'>
          <div className='main-container'>
            <ul className='main-footer__list align-text'>
              <li className='main-footer__list-text'>
                Awesome profile-cards © 2019
              </li>
              <li className='main-footer__list-adalab'>
                <img src={logoAdalab} alt='Imagen Adalab' />
              </li>
              <li className='main-footer__list-logo'>
                <a href='.' title='Link to Home'>
                  <img
                    className='main-footer__list-img'
                    src={logoTeam}
                    alt='Imagen Octomeow'
                  />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default CardGenerator;