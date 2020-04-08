$(function () {  
    var $width = $('#width'),
        $height = $('#height'),
        $btncal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
    
    $btncal.click(function () {  
        var w = Number($width.val()),
            h = Number($height.val());
        var p = 2*(w+h),
            a = w*h;
        
        $perimeter.val(roundFractional(p, 2));
        $area.val(roundFractional(a, 2));
    })

    /**
     * Math.round(x):
     * 给定数字的值四舍五入到最接近的整数
     * Math.pow(base, exponent):
     * 返回基数（base）的指数（exponent）次幂，即 base^exponent。
     */
    /**
     * 小数点后面保留第 n 位
     *
     * @param x 做近似处理的数
     * @param n 小数点后第 n 位
     * @returns 近似处理后的数 
     */
    function roundFractional(x, n) {  
        return Math.round(x * Math.pow(10,n)) / Math.pow(10, n);
    }
})