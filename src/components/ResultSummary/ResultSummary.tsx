import { Button, Category, CategoryHighlight, CategoryIcon, CategoryName, CategoryValue, Container, Header, ResultContainer, ResultDescription, ResultFeedback, ResultInfo, ResultNumber, Summary, SummaryTitle, Title } from "./ResultSummary.styled"

export const ResultSummary = () => {
    return (
        <Container>
            <Header>
                <Title>Your Result</Title>
                <ResultContainer>
                    <ResultNumber>76</ResultNumber>
                    <ResultInfo>of 100</ResultInfo>
                </ResultContainer>

                <ResultFeedback>Great</ResultFeedback>
                <ResultDescription>You scored higher than 65% of the people who have taken these tests.</ResultDescription>
            </Header>

            <Summary>
                <SummaryTitle>Summary</SummaryTitle>

                <Category $color="light_red">
                    <CategoryIcon src={`${process.env.PUBLIC_URL}/assets/images/icon-reaction.svg`} alt="Reaction icon" />
                    <CategoryName>Reaction</CategoryName>
                    <CategoryValue><CategoryHighlight>80</CategoryHighlight> / 100</CategoryValue>
                </Category>

                <Category $color="orange_yellow">
                    <CategoryIcon src={`${process.env.PUBLIC_URL}/assets/images/icon-memory.svg`} alt="Memory icon" />
                    <CategoryName>Memory</CategoryName>
                    <CategoryValue><CategoryHighlight>92</CategoryHighlight> / 100</CategoryValue>
                </Category>

                <Category $color="green_teal">
                    <CategoryIcon src={`${process.env.PUBLIC_URL}/assets/images/icon-verbal.svg`} alt="Verbal icon" />
                    <CategoryName>Verbal</CategoryName>
                    <CategoryValue><CategoryHighlight>61</CategoryHighlight> / 100</CategoryValue>
                </Category>

                <Category $color="default_blue">
                    <CategoryIcon src={`${process.env.PUBLIC_URL}/assets/images/icon-visual.svg`} alt="Visual icon" />
                    <CategoryName>Visual</CategoryName>
                    <CategoryValue><CategoryHighlight>72</CategoryHighlight> / 100</CategoryValue>
                </Category>

                <Button>Continue</Button>

            </Summary>
        </Container>
    )
}