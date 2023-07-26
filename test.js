describe("test", () => {
    it("scenario 1", () => {
        expect(JSON.stringify(getByText('label1').props.style)).toContain(`"color":"${defaultConfig.ErrorColour}"`);
    })
    
})
