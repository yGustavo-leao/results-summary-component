import styled from "styled-components";

const validColors = ['light_red', 'orange_yellow', 'green_teal', 'default_blue']

export const Container = styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    margin: auto;
    box-shadow: 20px 20px 50px ${({theme}) => theme.colors.blue.blue_100};
    border-radius: 20px;

    @media (min-width: 800px) {
        max-width: 600px;
        flex-direction: row;
        border-radius: 20px;
    }
`

export const Header = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding: 2rem;
    text-align: center;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    background-image: linear-gradient(
        180deg,
        ${({theme}) => theme.colors.blue.blue_300},
        ${({theme}) => theme.colors.blue.blue_500}
    );

    @media (min-width: 800px) {
        max-width: 300px;
        border-radius: 20px;
        justify-content: space-between;
    }
`

export const Title = styled.h1`
    font-size: 1.2rem;
    color: ${({theme}) => theme.colors.blue.blue_200};
`

export const ResultContainer = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: linear-gradient(
        180deg,
        ${({theme}) => theme.colors.blue.blue_600},
        ${({theme}) => theme.colors.blue.blue_800}
    );

    @media (min-width: 800px) {
        width: 200px;
        height: 200px;
    }
`

export const ResultNumber = styled.span`
    font-size: 3rem;
    font-weight: 900;
    color: ${({theme}) => theme.colors.white};

    @media (min-width: 800px) {
        font-size: 3.5rem;
    }
`

export const ResultInfo = styled.span`
    color: ${({theme}) => theme.colors.blue.blue_200};
`

export const ResultFeedback = styled.span`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.white};
`

export const ResultDescription = styled.p`
    max-width: 280px;
    align-self: center;
    color: ${({theme}) => theme.colors.blue.blue_200};
`

export const Summary = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding: 1rem 2rem;

    @media (min-width: 800px) {
        padding-top: 2rem;
    }
`

export const SummaryTitle = styled.h2`
    font-size: 1.2rem;
    color: ${({theme}) => theme.colors.blue.blue_700};
`

export const Category = styled.div<{$color: string}>`
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 1rem;
    column-gap: 1rem;
    border-radius: 10px;
    overflow: hidden;
    color: ${({theme, $color='white'}) => validColors.includes($color) && theme.colors[$color]};

    &::before{
        content: '';
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.05;
        background-color: ${({theme, $color='white'}) => validColors.includes($color) && theme.colors[$color]};
    }
`

export const CategoryIcon = styled.img`
    width: 22px;
    height: 22px;
`

export const CategoryName = styled.span`
    margin: auto;
    margin-left: 0;
    font-weight: 700;
`

export const CategoryValue = styled.p`
    font-weight: 700;
    color: ${({theme}) => theme.colors.gray};
`

export const CategoryHighlight = styled.span`
    color: ${({theme}) => theme.colors.blue.blue_700};
`

export const Button = styled.button`
    padding: 1rem;
    border-radius: 30px;
    font-weight: 700;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.blue.blue_700};

    &:hover {
        background-color: ${({theme}) => theme.colors.blue.blue_400};
    }

    @media (min-width: 800px) {
        margin: 1rem 0;
    }
`