import React from 'react';

const Images = (props) => {

    // console.log(props.images);

    const images = props.images.map(({ description, id, urls}) => {
        return (
                <div>
                    <div>
                        <h4>URL: </h4>
                        <span>
                            {urls.regular}
                        </span>
                    </div>
                    <img 
                        src={urls.regular}
                        alt={description}
                        key={id}
                    />
                </div>
        )
    })

    return (
        <div>
            <div>
                Found: {props.images.length} images
            </div>
            <div>
                {images}
            </div>
        </div>
    )
}

export default Images;