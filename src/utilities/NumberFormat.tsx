import { useMemo, forwardRef } from "react";
import NumberFormat, { InputAttributes } from "react-number-format";
interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}
export const MoneyFormatCustom = forwardRef<NumberFormat<InputAttributes>, CustomProps >(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;


    return (
        <NumberFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });

            }}
            isAllowed={({value})=> +value >= 0}
            thousandSeparator
            isNumericString
            prefix="$"
        />
    );
});
export const NumberFormatCustom = forwardRef<NumberFormat<InputAttributes>, CustomProps>(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            isAllowed={({value})=> +value >= 0}
            thousandSeparator
            isNumericString
        />
    );
});
export const DiscountFormatCustom = forwardRef<NumberFormat<InputAttributes>, CustomProps>(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            isAllowed={({value})=> +value >= 0 && +value <= 100}
            thousandSeparator
            isNumericString
        />
    );
});
