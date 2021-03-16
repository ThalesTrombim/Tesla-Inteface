import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelsWrapper, ModelSection } from '../Model';

import  UniqueOverlay  from "../UniqueOverlay/index";

import { Container } from './styled';


const Page: React.FC = () => {
    return (
        <Container>
            <ModelsWrapper>
                <div>
                    {[
                        'Model One',
                        'Model Two',
                        'Model Thre',
                        'Model Four',
                        'Model Five',
                        'Model Six',
                        'Model Seven',
                    ].map (ModelName => (
                        <ModelSection 
                        key={ModelName}
                        className="colored"
                        modelName={ModelName}
                        overlayNode ={
                            <DefaultOverlayContent 
                                label={ModelName}
                                description="Order Online for Delivery"    
                            />}
                    />   
                    ))}
                    
                </div>

                <UniqueOverlay />
            </ModelsWrapper>
        </Container>
    )
}

export default Page;
