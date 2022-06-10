describe('retirement assignment', ()=> {
    const browser = await remote({
        logLevel: 'trace',
        capabilities: {
            browserName: 'chrome'
        }
    })
    
    await browser.url('https://www.securian.com/insights-tools/retirement-calculator.html')
    
    const currentAge = await $('#current-age')
    await currentAge.setValue('40')

    const retirementAge = await $('#retirmement-age')
    await retirementAge.setValue('68')

    const currentIncome = await $('#current-income')
    await currentIncome.setValue('100000')

    const spouseIncome = await $('#spouse-income')
    await spouseIncome.setValue('75000')

    const currentTotalSavings = await $('#current-total-savings')
    await currentTotalSavings.setValue('500000')

    const currentAnnualSavings = await $('#current-annual-savings')
    await currentAnnualSavings.setValue('10')

    const savingIncreaseRate = await $('#savings-increase-rate')
    await savingIncreaseRate.setValue('.25')

    const socialSecurityBenifitsYes =await $('#yes-social-benifits')
    const socialSecurityBenifitsNo =await $('#no-social-benifits')

    const isSocialSecurityBenifits = true
    if(isSocialSecurityBenifits) {
        socialSecurityBenifitsYes.click()
    } else {
        socialSecurityBenifitsNo.click()
    }

    const single =await $('#single')
    const married =await $('#married')

    const isMarried = true
    if(isMarried) {
        married.click()
    } else {
        single.click()
    }

    const socialSecurityOveride = await $('#social-security-overide')
    await socialSecurityOveride.setValue('4000')

    //defaults 

    const additionalIncome = await $('#additionalIncome')
    await additionalIncome.setValue('500')

    const retirementDuration = await $('#retirment-duration')
    await retirementDuration.setValue('20')


    const includeInflation =await $('#include-inflation')
    const excludeInflation =await $('#exclude-inflation')

    const isIncludingInflation = true
    if(isIncludingInflation) {
        includeInflation.click()
    } else {
        excludeInflation.click()
    }

    const expectedInflationRate = await $('#expected-inflation-rate')
    await expectedInflationRate.setValue('8')

    const retirementAnnualIncome = await $('#retirement-annual-income')
    await retirementAnnualIncome.setValue('75000')
  
    const preRetirementROI = await $('#pre-retirement-roi')
    await preRetirementROI.setValue('8')

    const postRetirementROI = await $('#post-retirement-roi')
    await postRetirementROI.setValue('5')

    const calculateButton = await $('#submit')
    await calculateButton.click()

    const result = await $('#result-message')
    console.log(await result.getText())
    //todo some pass or fail of the result text
}
