import { forwardRef, useState } from "react"
import { IconButton, Input, InputGroup, type InputProps } from "@chakra-ui/react"
import { LuEye, LuEyeOff } from "react-icons/lu"

/** Password field with a show / hide toggle. */
export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  function PasswordInput(props, ref) {
    const [visible, setVisible] = useState(false)
    return (
      <InputGroup
        endElement={
          <IconButton
            type="button"
            aria-label={visible ? "Hide password" : "Show password"}
            aria-pressed={visible}
            variant="ghost"
            size="xs"
            me="-2"
            color="fg.muted"
            onClick={() => setVisible((v) => !v)}
          >
            {visible ? <LuEyeOff /> : <LuEye />}
          </IconButton>
        }
      >
        <Input ref={ref} {...props} type={visible ? "text" : "password"} />
      </InputGroup>
    )
  },
)
