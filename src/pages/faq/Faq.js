import React from 'react';
import {BsPlusLg} from "react-icons/bs";

const Faq = () => {
    return (
        <section id='questions'>
            <div className='container'>
                <div className="questions">
                    <div className="questions--summary">
                        <h1>Часто задаваемые вопросы</h1>
                        <div className="lin">

                        </div>
                        <details>
                            <summary>Что такое зарезервированные слова в программировании? <BsPlusLg className='icons' style={{color:"rgba(114, 7, 45, 1)"}}/></summary>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eius illo molestias
                            nesciunt
                            officiis quis reprehenderit suscipit tenetur veniam voluptas!
                        </details>
                        <details>
                            <summary>Могу ли я отказаться от автопродления подписки <BsPlusLg className='icons' style={{color:"rgba(114, 7, 45, 1)"}}/>
                            </summary>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eius illo molestias
                            nesciunt
                            officiis quis reprehenderit suscipit tenetur veniam voluptas!
                        </details>
                        <details>
                            <summary>Могу ли я вернуть деньги <BsPlusLg className='icons' style={{color:"rgba(114, 7, 45, 1)"}}/></summary>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eius illo molestias
                            nesciunt
                            officiis quis reprehenderit suscipit tenetur veniam voluptas!
                        </details>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;