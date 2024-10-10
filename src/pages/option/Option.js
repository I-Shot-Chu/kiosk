import { useState } from 'react';

export const ExtraShot = ({ extramenu = {}, handleOptionSelect }) => {
    const [selectedOption, setSelectedOption] = useState(extramenu.option || '');

    const handleSelectOption = (option, price) => {
        setSelectedOption(option);
        handleOptionSelect(option, price);
    };

    return (
        <div>
            <h3>샷 선택</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div
                    onClick={() => handleSelectOption('연하게', 0)}
                    style={{
                        border: selectedOption === '연하게' ? '2px solid red' : '1px solid black',
                        padding: 10,
                        cursor: 'pointer',
                    }}
                >
                    <img src={require('../../assets/images/images_option/espresso.png')} alt="연하게" style={{ width: 50 }} />
                    <p>연하게</p>
                    <p>+0원</p>
                </div>
                <div
                    onClick={() => handleSelectOption('샷 추가', 500)}
                    style={{
                        border: selectedOption === '샷 추가' ? '2px solid red' : '1px solid black',
                        padding: 10,
                        cursor: 'pointer',
                    }}
                >
                    <img src={require('../../assets/images/images_option/espresso.png')} alt="샷 추가" style={{ width: 50 }} />
                    <p>샷 추가</p>
                    <p>+500원</p>
                </div>
                <div
                    onClick={() => handleSelectOption('2샷 추가', 1000)}
                    style={{
                        border: selectedOption === '2샷 추가' ? '2px solid red' : '1px solid black',
                        padding: 10,
                        cursor: 'pointer',
                    }}
                >
                    <img src={require('../../assets/images/images_option/espresso.png')} alt="2샷 추가" style={{ width: 50 }} />
                    <p>2샷 추가</p>
                    <p>+1,000원</p>
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
                <h3>당도 선택</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div
                        onClick={() => handleSelectOption('설탕시럽 추가', 0)}
                        style={{
                            border: selectedOption === '설탕시럽 추가' ? '2px solid red' : '1px solid black',
                            padding: 10,
                            cursor: 'pointer',
                        }}
                    >
                        <img src={require('../../assets/images/images_option/sugar.png')} alt="설탕시럽 추가" style={{ width: 50 }} />
                        <p>설탕시럽 추가</p>
                        <p>+0원</p>
                    </div>
                    <div
                        onClick={() => handleSelectOption('덜 달게', 0)}
                        style={{
                            border: selectedOption === '덜 달게' ? '2px solid red' : '1px solid black',
                            padding: 10,
                            cursor: 'pointer',
                        }}
                    >
                        <img src={require('../../assets/images/images_option/sugar.png')} alt="덜 달게" style={{ width: 50 }} />
                        <p>덜 달게</p>
                        <p>+0원</p>
                    </div>
                    <div
                        onClick={() => handleSelectOption('스테비아 설탕 추가', 700)}
                        style={{
                            border: selectedOption === '스테비아 설탕 추가' ? '2px solid red' : '1px solid black',
                            padding: 10,
                            cursor: 'pointer',
                        }}
                    >
                        <img src={require('../../assets/images/images_option/stevia.png')} alt="스테비아 추가" style={{ width: 50 }} />
                        <p>스테비아 설탕 추가</p>
                        <p>+700원</p>
                    </div>
                    <div
                        onClick={() => handleSelectOption('바닐라 시럽 추가', 500)}
                        style={{
                            border: selectedOption === '바닐라 시럽 추가' ? '2px solid red' : '1px solid black',
                            padding: 10,
                            cursor: 'pointer',
                        }}
                    >
                        <img src={require('../../assets/images/images_option/vanilla.png')} alt="바닐라 시럽 추가" style={{ width: 50 }} />
                        <p>바닐라시럽 추가</p>
                        <p>+500원</p>
                    </div>
                    <div
                        onClick={() => handleSelectOption('헤이즐럿 시럽 추가', 500)}
                        style={{
                            border: selectedOption === '헤이즐럿 시럽 추가' ? '2px solid red' : '1px solid black',
                            padding: 10,
                            cursor: 'pointer',
                        }}
                    >
                        <img src={require('../../assets/images/images_option/hazelnut.png')} alt="헤이즐럿 시럽 추가" style={{ width: 50 }} />
                        <p>헤이즐럿 시럽 추가</p>
                        <p>+500원</p>
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
            <h3>얼음 양(선택, 단일선택)</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div
                    onClick={() => handleSelectOption('얼음 없이', 0)}
                    style={{
                        border: selectedOption === '얼음 없이' ? '2px solid red' : '1px solid black',
                        padding: 10,
                        cursor: 'pointer',
                    }}
                >
                    <img src={require('../../assets/images/images_option/ice.png')} alt="얼음 없이" style={{ width: 50 }} />
                    <p>얼음 없이</p>
                    <p>+0원</p>
                </div>
                <div
                    onClick={() => handleSelectOption('얼음 반만', 0)}
                    style={{
                        border: selectedOption === '얼음 반만' ? '2px solid red' : '1px solid black',
                        padding: 10,
                        cursor: 'pointer',
                    }}
                >
                    <img src={require('../../assets/images/images_option/ice.png')} alt="얼음 반만" style={{ width: 50 }} />
                    <p>얼음 반만</p>
                    <p>+0원</p>
                </div>
                <div
                    onClick={() => handleSelectOption('얼음 많이', 0)}
                    style={{
                        border: selectedOption === '얼음 많이' ? '2px solid red' : '1px solid black',
                        padding: 10,
                        cursor: 'pointer',
                    }}
                >
                    <img src={require('../../assets/images/images_option/ice.png')} alt="얼음 많이" style={{ width: 50 }} />
                    <p>얼음 많이</p>
                    <p>+0원</p>
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
            <h3>토핑 선택</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div
                    onClick={() => handleSelectOption('휘핑크림', 500)}
                    style={{
                        border: selectedOption === '휘핑크림' ? '2px solid red' : '1px solid black',
                        padding: 10,
                        cursor: 'pointer',
                    }}
                >
                    <img src={require('../../assets/images/images_option/whippedcream.png')} alt="휘핑크림" style={{ width: 50 }} />
                    <p>휘핑크림</p>
                    <p>+500원</p>
                </div>
                <div
                    onClick={() => handleSelectOption('초코젤라또', 700)}
                    style={{
                        border: selectedOption === '초코젤라또' ? '2px solid red' : '1px solid black',
                        padding: 10,
                        cursor: 'pointer',
                    }}
                >
                    <img src={require('../../assets/images/images_option/icecream.png')} alt="초코젤라또" style={{ width: 50 }} />
                    <p>초코젤라또</p>
                    <p>+700원</p>
                </div>
                <div
                    onClick={() => handleSelectOption('타피오카펄', 700)}
                    style={{
                        border: selectedOption === '타피오카펄' ? '2px solid red' : '1px solid black',
                        padding: 10,
                        cursor: 'pointer',
                    }}
                >
                    <img src={require('../../assets/images/images_option/tapioca.png')} alt="타피오카펄" style={{ width: 50 }} />
                    <p>타피오카펄</p>
                    <p>+700원</p>
                </div>
            </div>
        </div>
    );
};