import React, {useCallback, useEffect} from 'react';

const KEY_NAME_ESC = 'Escape';
const KEY_EVENT_TYPE = 'keyup';
const MOUSE_UP = 'mouseup';

export function useEscapeKey(handleClose:any) {
    const handleEscKey = useCallback((event:any) => {
        if (event.key === KEY_NAME_ESC) {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);

        return () => {
            document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
        };
    }, [handleEscKey]);
}
