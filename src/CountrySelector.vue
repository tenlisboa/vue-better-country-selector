<template>
    <select v-model="selected" @change="onSelect">
        <option value="" selected disabled>{{ placeholder }}</option>
        <option v-for="country in options" :key="country.name" :value="getValueFor(country)">{{ getValueFor(country) }}</option>
    </select>
</template>

<script>
import countryRegionData from "country-region-data";

export default {
    props: {
        placeholder: {
            type: String,
            required: false,
            default: "Select Country"
        },
        value: { type: String, required: false, default: "" },
        shortCode: { type: Boolean, required: false, default: false }
    },

    data() {
        return {
            options: [],
            selected: this.value
        };
    },

    watch: {
        value() {
            this.selected = this.value;
        }
    },

    created() {
        this.filterData();
    },

    methods: {
        onSelect() {
            this.$emit("input", this.selected);
        },

        getValueFor(country) {
            if (this.shortCode) {
                return country.shortCode;
            }

            return country.name;
        },

        filterData() {
            countryRegionData.map(country =>
                this.options.push({
                    name: country.countryName,
                    shortCode: country.countryShortCode
                })
            );
        }
    }
};
</script>
