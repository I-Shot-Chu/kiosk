import { useState } from 'react';
import './Option.css'

export const ExtraShot = ({ extramenu = {}, handleOptionSelect }) => {
    const [selectedOption, setSelectedOption] = useState(extramenu.option || '');

    const handleSelectOption = (option, price) => {
        setSelectedOption(option);
        handleOptionSelect(option, price);
    };

    return (
        <div>
            <img src={require('../../assets/images/images_option/optionLine.png')} alt='line'/>
            <h3 className='option_category'>샷 선택</h3>
            <div className='option_item'>
                <div className={`option_detail ${selectedOption === '연하게' ? 'selected' : ''}`}
                    onClick={() => handleSelectOption('연하게', 0)}  
                >
                    <img className='option_img' src={require('../../assets/images/images_option/espresso.png')} alt="연하게" />
                    <p className='option_name'>연하게</p>
                    <p className='option_price'>+0원</p>
                </div>
                <div className={`option_detail ${selectedOption === '샷 추가' ? 'selected' : ''}`}
                    onClick={() => handleSelectOption('샷 추가', 500)}
                >
                    <img className='option_img' src={require('../../assets/images/images_option/espresso.png')} alt="샷 추가" />
                    <p className='option_name'>샷 추가</p>
                    <p className='option_price'>+500원</p>
                </div>
                <div className={`option_detail ${selectedOption === '2샷 추가' ? 'selected' : ''}`}
                    onClick={() => handleSelectOption('2샷 추가', 1000)}
                >
                    <img className='option_img' src={require('../../assets/images/images_option/espresso.png')} alt="2샷 추가" />
                    <p className='option_name'>2샷 추가</p>
                    <p className='option_price'>+1,000원</p>
                </div>
            </div>
        </div>
    );
};
    // 연하게 : Lightly shot
    // 샷추가 : coffee shot
    // 2샷추가 : double shot

    export const ExtraSugar = ({ extramenu = {}, handleOptionSelect }) => {
        const [selectedOption, setSelectedOption] = useState(extramenu.option || '');
    
        const handleSelectOption = (option, price) => {
            setSelectedOption(option);
            handleOptionSelect(option, price);
        };
    
        return (
            <div>
                <h3 className='option_category'>당도 선택</h3>
                <div className='option_item'>
                    <div className={`option_detail ${selectedOption === '설탕시럽 추가' ? 'selected' : ''}`}
                        onClick={() => handleSelectOption('설탕시럽 추가', 0)}
                    >
                        <img className='option_img' src={require('../../assets/images/images_option/sugar.png')} alt="설탕시럽 추가"/>
                        <p className='option_name'>설탕시럽</p>
                        <p className='option_price'>+0원</p>
                    </div>
                    <div className={`option_detail ${selectedOption === '덜 달게' ? 'selected' : ''}`}
                        onClick={() => handleSelectOption('덜 달게', 0)}
                    >
                        <img className='option_img' src={require('../../assets/images/images_option/sugar.png')} alt="덜 달게"/>
                        <p className='option_name'>덜 달게</p>
                        <p className='option_price'>+0원</p>
                    </div>
                    <div className={`option_detail ${selectedOption === '스테비아 설탕 추가' ? 'selected' : ''}`}
                        onClick={() => handleSelectOption('스테비아 설탕 추가', 700)}
                    >
                        <img className='option_img' src={require('../../assets/images/images_option/stevia.png')} alt="스테비아 추가"/>
                        <p className='option_name'>스테비아 설탕</p>
                        <p className='option_price'>+700원</p>
                    </div>
                    <div className={`option_detail ${selectedOption === '바닐라 시럽 추가' ? 'selected' : ''}`}
                        onClick={() => handleSelectOption('바닐라 시럽 추가', 500)}
                    >
                        <img className='option_img' src={require('../../assets/images/images_option/vanilla.png')} alt="바닐라 시럽 추가"/>
                        <p className='option_name'>바닐라시럽</p>
                        <p className='option_price'>+500원</p>
                    </div>
                    <div className={`option_detail ${selectedOption === '헤이즐럿 시럽 추가' ? 'selected' : ''}`}
                        onClick={() => handleSelectOption('헤이즐럿 시럽 추가', 500)}
                    >
                        <img className='option_img' src={require('../../assets/images/images_option/hazelnut.png')} alt="헤이즐럿 시럽 추가"/>
                        <p className='option_name'>헤이즐럿 시럽</p>
                        <p className='option_price'>+500원</p>
                    </div>
                </div>
            </div>
        );
    };
    


export const ExtraIce = ({ extramenu = {}, handleOptionSelect }) => {
    const [selectedOption, setSelectedOption] = useState(extramenu.option || '');

    // Handle selecting an option and updating the state
    const handleSelectOption = (option, price) => {
        setSelectedOption(option);
        handleOptionSelect(option, price);
    };

    return (
        <div>
            <h3 className='option_category'>얼음 양(선택, 단일선택)</h3>
            <div className='option_item'>
                <div className={`option_detail ${selectedOption === '얼음 없이' ? 'selected' : ''}`}
                    onClick={() => handleSelectOption('얼음 없이', 0)}
                >
                    <img className='option_img' src={require('../../assets/images/images_option/ice.png')} alt="얼음 없이" />
                    <p className='option_name'>얼음 없이</p>
                    <p className='option_price'>+0원</p>
                </div>
                <div className={`option_detail ${selectedOption === '얼음 반만' ? 'selected' : ''}`}
                    onClick={() => handleSelectOption('얼음 반만', 0)}
                >
                    <img className='option_img' src={require('../../assets/images/images_option/ice.png')} alt="얼음 반만"/>
                    <p className='option_name'>얼음 반만</p>
                    <p className='option_price'>+0원</p>
                </div>
                <div className={`option_detail ${selectedOption === '얼음 많이' ? 'selected' : ''}`}
                    onClick={() => handleSelectOption('얼음 많이', 0)}
                >
                    <img className='option_img' src={require('../../assets/images/images_option/ice.png')} alt="얼음 많이"/>
                    <p className='option_name'>얼음 많이</p>
                    <p className='option_price'>+0원</p>
                </div>
            </div>
        </div>
    );
};


export const ExtraTopping = ({ extramenu = {}, handleOptionSelect }) => {
    const [selectedOption, setSelectedOption] = useState(extramenu.option || '');

    const handleSelectOption = (option, price) => {
        setSelectedOption(option);
        handleOptionSelect(option, price);
    };

    return (
        <div>
            <h3 className='option_category'>토핑 선택</h3>
            <div className='option_item'>
                <div className={`option_detail ${selectedOption === '휘핑크림' ? 'selected' : ''}`}
                    onClick={() => handleSelectOption('휘핑크림', 500)}
                >
                    <img className='option_img' src={require('../../assets/images/images_option/whippedcream.png')} alt="휘핑크림"/>
                    <p className='option_name'>휘핑크림</p>
                    <p className='option_price'>+500원</p>
                </div>
                <div className={`option_detail ${selectedOption === '초코젤라또' ? 'selected' : ''}`}
                    onClick={() => handleSelectOption('초코젤라또', 700)}
                >
                    <img className='option_img' src={require('../../assets/images/images_option/icecream.png')} alt="초코젤라또"  />
                    <p className='option_name'>초코젤라또</p>
                    <p className='option_price'>+700원</p>
                </div>
                <div className={`option_detail ${selectedOption === '타피오카펄' ? 'selected' : ''}`}
                    onClick={() => handleSelectOption('타피오카펄', 700)}
                >
                    <img className='option_img' src={require('../../assets/images/images_option/tapioca.png')} alt="타피오카펄"/>
                    <p className='option_name'>타피오카펄</p>
                    <p className='option_price'>+700원</p>
                </div>
            </div>
        </div>
    );
};