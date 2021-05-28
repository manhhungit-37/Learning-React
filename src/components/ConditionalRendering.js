export default function ConditionalRendering() {
    const array = [1];
    const isShowButton = false;

    return (
        <div>
            {array.length > 0 && isShowButton && (
                "Hung dep trai " 
            )}
            {array.length > 0 && isShowButton ? (
                "Hung dep trai"
            ) : (
                "Hung lai dep trai"
            )}
        </div>
    )
}