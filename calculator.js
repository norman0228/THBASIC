function calculate() {
    // 獲取輸入值
    const price = parseFloat(document.getElementById('price').value) || 0; // 售價
    const cost = parseFloat(document.getElementById('cost').value) || 0; // 成本
    const rate = parseFloat(document.getElementById('rate').value) || 1.005; // 匯率
    const weight = parseFloat(document.getElementById('weight').value) || 0; // 重量
    const shipping = parseFloat(document.getElementById('shipping').value) || 140; // 運費

    // 固定參數
    const taxRate = 0.05; // 稅率5%

    try {
        // 成本計算
        const costTWD = (cost / rate) * (1 + taxRate); // 成本轉台幣並加稅
        const shippingCost = (weight / 1000) * shipping * (1 + taxRate); // 運費加稅
        const totalCost = costTWD + shippingCost;

        // 利潤計算
        const netProfit = price - totalCost; // 淨利潤
        const profitRate = (netProfit / price) * 100; // 獲利率

        // 顯示結果
        document.getElementById('results').innerHTML = `
            <h3>計算結果</h3>
            <p>總成本：$${totalCost.toFixed(2)}</p>
            <p>淨利潤：$${netProfit.toFixed(2)}</p>
            <p>獲利率：${profitRate.toFixed(2)}%</p>`;
            
     } catch (error) {
         document.getElementById('results').innerHTML =
             `<p style='color:red;'>錯誤：${error.message}</p>`;
     }
}
