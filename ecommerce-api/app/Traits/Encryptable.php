<?php

namespace App\Traits;

/**
 * Trait Encryptable
 * @package App\Traits
 */
trait Encryptable
{
    /**
     * If the attribute is in the encryptable array
     * then decrypt it.
     *
     * @param string $key
     *
     * @return mixed $value
     */
    public function getAttribute($key)
    {
        $value = parent::getAttribute($key);
        if (isset($this->encryptable) && in_array($key, $this->encryptable) && $value !== '' && $value !== null) {
            $value = decrypt($value);
        }

        return $value;
    }
    /**
     * If the attribute is in the encryptable array
     * then encrypt it.
     *
     * @param string $key
     * @param mixed $value
     * @return mixed
     */
    public function setAttribute($key, $value)
    {
        if (isset($this->encryptable) && in_array($key, $this->encryptable)) {
            $value = encrypt($value);
        }

        return parent::setAttribute($key, $value);
    }

    /**
     * When need to make sure that we iterate through
     * all the keys.
     *
     * @return array
     */
    public function attributesToArray() : array
    {
        $attributes = parent::attributesToArray();
        if(isset($this->encryptable)) {
            foreach ( $this->encryptable as $key) {
                if (isset($attributes[$key])) {
                    $attributes[$key] = decrypt($attributes[$key]);
                }
            }
        }

        return $attributes;
    }

    /**
     * Getter for the encrytable property
     *
     * @return array
     */
    public function getEncryptable()
    {
        return $this->encryptable;
    }

    /**
     * get the raw value of an attribute
     *
     * @param $attribute
     */
    public function getRawAttribute($attribute)
    {
        return $this->attributes[$attribute];
    }
}