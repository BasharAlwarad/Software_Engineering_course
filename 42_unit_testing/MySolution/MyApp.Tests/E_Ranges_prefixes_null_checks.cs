using MyApp;
using Xunit;

// Tests for E_TemperatureConverter: conversion and range
public class E_Ranges_prefixes_null_checks
{
    // Test known conversion points
    [Theory]
    [InlineData(0,   32)]
    [InlineData(100, 212)]
    public void CelsiusToFahrenheit_KnownPoints(double c, double f)
        => Assert.Equal(f, E_TemperatureConverter.CelsiusToFahrenheit(c), precision: 5);

    // Test conversion result is in expected range
    [Fact]
    public void CelsiusToFahrenheit_InRange()
    {
        var f = E_TemperatureConverter.CelsiusToFahrenheit(20);
        Assert.InRange(f, 67.9, 68.1);
    }
}
