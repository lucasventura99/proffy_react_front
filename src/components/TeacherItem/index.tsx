import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/48724904?s=460&u=55a2382fe8a1068d6be43a79ca72731e924b32bf&v=4" alt="Lucas Ventura" />
                <div>
                    <strong>Lucas Ventura</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>Entusiasta das melhores tecnologias de química avançada.
                        <br /><br />
                        Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências.
                    </p>

            <footer>
                <p>Preço/hora
                        <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp Icon" />
                            Entrar em Contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem