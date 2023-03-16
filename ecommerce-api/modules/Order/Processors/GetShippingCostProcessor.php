<?php

namespace Modules\Order\Processors;

class GetShippingCostProcessor {

    const SHIPPING_COST_PER_COUNTRY = [
        'italy' => 7,
        'austria' => 11,
        'belgium' => 12,
        'bulgaria' => 19,
        'denmark' => 15,
        'france' => 18,
        'germany' => 12,
        'liechtenstein' => 14,
        'luxembourg' => 14,
        'the netherlands' => 13,
        'poland' => 19,
        'czech republic' => 20,
        'slovenia' => 15,
        'spain' => 19,
        'switzerland' => 15,
        'hungary' => 17
    ];

    public function getShippingCost($country) {
        if(!isset(self::SHIPPING_COST_PER_COUNTRY[$country])) {
            return null;
        }

        return self::SHIPPING_COST_PER_COUNTRY[$country];
    }

}